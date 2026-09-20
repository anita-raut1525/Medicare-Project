resource "aws_security_group" "alb" {
  name        = "medicare-${var.environment}-alb-sg"
  description = "Security group for Medicare ALB"
  vpc_id      = var.vpc_id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "medicare-${var.environment}-alb-sg"
    Environment = var.environment
    Project     = "Medicare"
  }
}


resource "aws_lb" "jenkins" {
  name               = "medicare-${var.environment}-jenkins-alb"
  internal           = false
  load_balancer_type = "application"

  security_groups = [aws_security_group.alb.id]
  subnets         = var.public_subnet_ids

  tags = {
    Name        = "medicare-${var.environment}-jenkins-alb"
    Environment = var.environment
    Project     = "Medicare"
  }
}

resource "aws_lb_target_group" "jenkins" {
  name     = "medicare-${var.environment}-jenkins-tg"
  port     = 8080
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    path                = "/login"
    port                = "8080"
    protocol            = "HTTP"
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
  }

  tags = {
    Name        = "medicare-${var.environment}-jenkins-tg"
    Environment = var.environment
  }
}

resource "aws_lb_target_group_attachment" "jenkins" {
  target_group_arn = aws_lb_target_group.jenkins.arn
  target_id        = var.jenkins_instance_id
  port             = 8080
}

resource "aws_lb_listener" "jenkins" {
  load_balancer_arn = aws_lb.jenkins.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.jenkins.arn
  }
}