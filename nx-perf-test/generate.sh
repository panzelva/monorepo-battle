#!/bin/bash

INSTALL=""
IMPORT=""

for i in $(seq -w 1 1000 | sed -n '1,1000p'); do
  rm -rf libs/component$i
  pnpm plop --name Component$i

  INSTALL="$INSTALL @nx-perf-test/component$i"
  IMPORT="$IMPORT import { Component$i } from '@nx-perf-test/component$i';"
done

echo "pnpm install $INSTALL" >install
echo $IMPORT >import
