#!/bin/bash
source .env

set -e

# Wait for Postgres to start
until PGPASSWORD=$PGPASSWORD psql -h $PGHOST -U $PGUSER -c '\q' 2>/dev/null; do
  echo "Waiting for Postgres to start..."
  sleep 2
done

# Run SQL script
PGPASSWORD=$PGPASSWORD psql -h $PGHOST -U $PGUSER -d $PGDATABASE -f tcc_db.sql
