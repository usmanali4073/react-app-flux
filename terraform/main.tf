#------------------------------------------------------------------------------------------------
# Create the S3 Bucket First
# @ alway set the force_destroy to true so bucket is delete on terraform destory even it has files
#-------------------------------------------------------------------------------------------------
resource "aws_s3_bucket" "site_bucket" {
  bucket        = "${var.site_name}"
  acl           = "public-read"
  force_destroy = true
  #   versioning {
  #     enabled = true
  #   }
  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  policy = "${file("./policy/website_bucket_policy.json")}"

}

#------------------------------------------------------------------------------------------------
# Upload the files to s3 bucket using native AWS CLI
#-------------------------------------------------------------------------------------------------

resource "null_resource" "remove_and_upload_to_s3" {
  provisioner "local-exec" {
    command = "aws s3 sync ${path.module}/../build s3://${aws_s3_bucket.site_bucket.id}"
  }
}

#------------------------------------------------------------------------------------------------
# Out Put the website endpoint
#-------------------------------------------------------------------------------------------------


output "output" {
  description = "s3 bucket website endpoint"
  value       = "${aws_s3_bucket.site_bucket.website_endpoint}"
}
