resource "aws_instance" "jenkins" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = var.private_subnet_id
  vpc_security_group_ids      = [var.security_group_id]
  associate_public_ip_address = false

  tags = {
    Name        = "medicare-${var.environment}-jenkins"
    Environment = var.environment
    Project     = "Medicare"
  }
}