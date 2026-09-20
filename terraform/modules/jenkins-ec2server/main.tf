resource "aws_instance" "jenkins" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = var.private_subnet_id
  vpc_security_group_ids      = [var.security_group_id]
  associate_public_ip_address = false

  iam_instance_profile = aws_iam_instance_profile.jenkins.name

  tags = {
    Name        = "medicare-${var.environment}-jenkins"
    Environment = var.environment
    Project     = "Medicare"
  }
}


resource "aws_iam_role" "jenkins_ssm" {
  name = "medicare-${var.environment}-jenkins-ssm-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "ec2.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "jenkins_ssm" {
  role       = aws_iam_role.jenkins_ssm.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_instance_profile" "jenkins" {
  name = "medicare-${var.environment}-jenkins-profile"
  role = aws_iam_role.jenkins_ssm.name
}

