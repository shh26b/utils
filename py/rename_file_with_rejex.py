#!/usr/bin/env python

from sys import argv
import re
import shutil


def format_name(file: str) -> str:
    file = re.sub(" ", "_", file)
    file = re.sub("-", "_", file)
    return file

def mv_file(src: str, dst: str) -> None:
    shutil.move(src, dst)


if __name__ == "__main__":
    name = argv[1]
    formatted_name = format_name(name)
    mv_file(name, formatted_name)
