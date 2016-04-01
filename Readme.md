# Anonymizer

Removes personal information from a database of a meteor app as prep for using the production database for testing.

>Note: **Currently a work in progress! Don't trust this package to do a good job protecting your user's privacy.**

# Features

1. Replaces all emails found in the Meteor.users collection with `user1@example.com` etc. and also resets all passwords to `password`.