output "cluster_name" {
  value = aws_eks_cluster.main.name
}

output "cluster_endpoint" {
  value = aws_eks_cluster.main.endpoint
}

output "node_group_name" {
  value = aws_eks_node_group.main.node_group_name
}

output "oidc_issuer" {
  value = aws_eks_cluster.main.identity[0].oidc[0].issuer
}