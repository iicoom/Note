#!/bin/sh

BASEDIR=$(dirname "$0")

pwd
echo $BASEDIR

cd $BASEDIR

keeper_server() {
	cd child
	pwd
	cd $BASEDIR
}
keeper_server

pwd