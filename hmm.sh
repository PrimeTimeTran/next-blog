#!/bin/sh

echo "example!"

if who | grep "^$user" > /dev/null
then 
  echo "$user is online"
else
  echo "$user is offline"
fi 




