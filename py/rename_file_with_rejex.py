#!/usr/bin/env python

from sys import argv
import re
import shutil
import os


def format_name(file: str) -> str:
    file = re.sub(" ", "_", file)
    file = re.sub("-", "_", file)
    return file


def mv_file(src: str, dst: str) -> None:
    shutil.move(src, dst)


if __name__ == "__main__":
    rootdir = '.'
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            formatted_file = format_name(file)
            mv_file(os.path.join(subdir, file),
                    os.path.join(subdir, formatted_file))
            print(os.path.join(subdir, formatted_file))
