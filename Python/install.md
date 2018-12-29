## for Mac
brew install python3   / brew upgrade python3 升级

==> python
Python has been installed as
  /usr/local/bin/python3

Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
  /usr/local/opt/python/libexec/bin

If you need Homebrew's Python 2.7 run
  brew install python@2

You can install Python packages with
  pip3 install <package>
They will install into the site-package directory
  /usr/local/lib/python3.7/site-packages

See: https://docs.brew.sh/Homebrew-and-Python
➜  ~ pip
zsh: command not found: pip
➜  ~ pip3

Usage:
  pip3 <command> [options]

Commands:
  install                     Install packages.
  download                    Download packages.

### pip3 install <package>
➜  ~ pip3 install scrapy