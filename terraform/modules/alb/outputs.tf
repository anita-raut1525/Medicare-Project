output "alb_security_group_id" {
  value = aws_security_group.alb.id
}


output "alb_dns_name" {
  value = aws_lb.jenkins.dns_name
}

output "target_group_arn" {
  value = aws_lb_target_group.jenkins.arn
}