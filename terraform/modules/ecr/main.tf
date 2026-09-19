resource "aws_ecr_repository" "backend" {
  name                 = "medicare-backend-${var.environment}"
  image_tag_mutability = "IMMUTABLE" # Immutable means something that cannot be changed after it has been created.

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name        = "medicare-backend-${var.environment}"
    Environment = var.environment
    Project     = "Medicare"
  }
}

resource "aws_ecr_repository" "frontend" {
  name                 = "medicare-frontend-${var.environment}"
  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name        = "medicare-frontend-${var.environment}"
    Environment = var.environment
    Project     = "Medicare"
  }
}