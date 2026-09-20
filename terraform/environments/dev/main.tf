module "network" {
  source = "../../modules/network"

  environment = var.environment
  vpc_cidr    = var.vpc_cidr

  public_subnet_1_cidr  = var.public_subnet_1_cidr
  public_subnet_2_cidr  = var.public_subnet_2_cidr
  private_subnet_1_cidr = var.private_subnet_1_cidr
  private_subnet_2_cidr = var.private_subnet_2_cidr
}


module "security" {
  source = "../../modules/security"

  environment = var.environment
  vpc_id      = module.network.vpc_id
}

module "jenkins" {
  source = "../../modules/jenkins-ec2server"

  environment       = var.environment
  vpc_id            = module.network.vpc_id
  private_subnet_id = module.network.private_subnet_ids[0]
  security_group_id = module.security.jenkins_security_group_id

  instance_type = "t3.micro"
  ami_id        = "ami-01a00762f46d584a1"
}

/*

module "ecr" {
  source = "../../modules/ecr"

  environment = var.environment
}

 module "eks" {
source = "../../modules/eks"

environment = var.environment

cluster_name = "medicare-${var.environment}-eks"

  private_subnet_ids = module.network.private_subnet_ids

  node_instance_types = ["t3.small"]
}

module "alb" {
  source = "../../modules/alb"

  environment = var.environment

  vpc_id = module.network.vpc_id

  public_subnet_ids = module.network.public_subnet_ids
}

module "iam" {
  source = "../../modules/iam"

  environment  = var.environment
  cluster_name = module.eks.cluster_name
  oidc_issuer  = module.eks.oidc_issuer
}
 */