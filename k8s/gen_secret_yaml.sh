SQL_USER="[ユーザ名]"
SQL_PASSWORD="[パスワード]"
SQL_SERVER="[サーバ名].postgres.database.azure.com"
SQL_DBNAME="mydrivingdb"
_SQL_USER=`echo $SQL_USER | base64`
_SQL_PASSWORD=`echo $SQL_PASSWORD | base64`
_SQL_SERVER=`echo $SQL_SERVER | base64`
_SQL_DBNAME=`echo $SQL_DBNAME | base64`
cat << EOF > mysecret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: sql
  namespace: api
type: Opaque
data:
  SQL_USER: $_SQL_USER
  SQL_PASSWORD: $_SQL_PASSWORD
  SQL_SERVER: $_SQL_SERVER
  SQL_DBNAME: $_SQL_DBNAME
EOF
