# Generated from trgen 0.23.7
set -e
set -x

exec npx tsx Test.js "$@"

exit $?
