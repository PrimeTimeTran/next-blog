## Create ecdsa type SSH key

ssh-keygen -t ecdsa -b 256 -f ~/.ssh/gcp_ecdsa_key

## Copy local ssh key to clipboard/buffer

cat ~/.ssh/gcp_ecdsa_key.pub | pbcopy

## SSH using local ecdsa type key

ssh -i ~/.ssh/gcp_ecdsa_key future@35.240.156.96

## Download file using SSH key

scp -i ~/.ssh/gcp_ecdsa_key future@35.240.156.96:/var/www/html/wp-content/ai1wm-backups/35.240.156.96-20240709-170541-466.wpress .
