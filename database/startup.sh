#!/bin/bash

# Modify pg_hba.conf to use md5 authentication
sed -i 's/local   all             all                                     peer/local   all             all                                     md5/' /etc/postgresql/9.6/main/pg_hba.conf

# Restart PostgreSQL to apply changes
service postgresql restart

# Specify the name of the database you want to create
DB_NAME="madhouse"

# Create the database using the psql command
psql -U mh -c "CREATE DATABASE $DB_NAME;"

# Add extensions to the specified database
psql -U mh -d "$DB_NAME" -c "CCREATE EXTENSION plpython3u;"
psql -U mh -d "$DB_NAME" -c "CREATE EXTENSION IF NOT EXISTS plr;"

# Run MADlib setup
/usr/local/madlib/bin/madpack -p postgres -c mh:mh@localhost:5432/"$DB_NAME" install

# Keep the container running (if needed)
tail -f /dev/null
