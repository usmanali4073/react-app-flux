terraform {
  backend "s3" {
    bucket = "terraform-state-dev-arental"
    key    = "website/arental_guru_terraform_state.tfstate"
    region = "us-east-1"
  }
}


