# OpenDSA (Development Channel)

This is the development repository for the OpenDSA project.

The goal of the OpenDSA project is to create open-source courseware for use in
Data Structures and Algorithms courses, that deeply integrates textbook-quality
content with algorithm visualizations and interactive, automatically assessed
exercises.

## Documentation

System documentation can be found at http://opendsa.readthedocs.io/.


## Setup

To check out a read-only copy of this repository:

    git clone git://github.com/OpenDSA/OpenDSA.git OpenDSA

To check out a read-write copy of this repository (requires permission to commit
to the repo):

    git clone https://YOURGITHUBID@github.com/OpenDSA/OpenDSA.git OpenDSA

Once you have cloned this repository, you will need to install the OpenDSA stack using Docker.
Once you have the environment set up, including making sure Docker is currently running on your machine, you can run the following command:

    docker-compose up

This command will first pull and build the OpenDSA images before
instantiating the OpenDSA container.
This command runs several setup commands in the background to
initialize the submodules and install the python packages requirements
of OpenDSA.
**This will probably take a long time to run the first time.**

Once this command completes, it will fire up a local web server, that
you can reach at this URL: `http://127.0.0.1:8080/`. This terminal
will not be useable at this point since it is a console for the web
server.

In order to interact with OpenDSA, you must get access to a shell
within the container. To do this, open another console window, go
to the root of your OpenDSA repository, and issue the following
command:

    docker-compose exec opendsa bash

which will place you in the correct location within the container to
run any OpenDSA commands including `Make Test`. Note: If you are on
Windows using the MINGW64 shell, you might need to use the command:

    winpty docker-compose exec opendsa bash

In order to stop the container you can use CTRL + C (sending an
interrupt signal).

[Note that this won't work unless you have the proper tools
installed.]
### Toolchain Installation

First, install Docker using the provided instructions linked below.

Once Docker is installed, make sure the Docker Desktop application is running if you are on Windows or Mac. Linux should take care of this in the post-install instructions.

See: http://opendsa.readthedocs.io/en/latest/GettingStarted.html#setting-up-a-local-development-environment for more information

OpenDSA makes use of the JSAV data structures visualization
library. Nearly all developers and users can make do with the version
of JSAV distributed with OpenDSA. If you really need the most
up-to-date version of JSAV, you can find it at
https://github.com/vkaravir/JSAV

The source files for the OpenDSA documentation can be found in the
"Doc" directory.
Changes to the documentation source, once pushed back to the
repository, will automatically revise the public version at
readthedocs.io.
You can also re-compile the documentation by going to the "Doc"
directory and typing "make".
The result will then be in "Doc/manual".


## Common Errors

Make sure that you have started Docker before running of the Makefile commands.

If you are on Windows, you may run into issues with line endings.  If you do, simply open Git Bash and run `$ dos2unix filename` to fix them.  This will most likely happen on a script file.

If you are on Windows, you may run into issues with any `docker exec` commands (such as `make ssh`).  To solve them, you may have to start any such command with `winpty`.

If any of the python packages (or any of the ruby gems) have been upgraded since the last time the container has been run, you will need to run `docker-compose build` before you `docker-compose up`.


## Directory Structure

The major components in the directory structure are as follows:

AV: Source code for various algorithm visualizations and associated exercises.
Subdirectories divide the content by topical areas.

Books: Created by the build process, this contains compiled versions of
"textbooks".

config: This holds configuration files for specific books (whose output will go
to the "Books" directory).

Doc: Documentation.
Currently includes a template for Khan Academy multiple
choice questions, and documentation for using the various Sphinx
directives that we have created.

Exercises: Our Khan Academy Infrastructure-based exercises. Subdirectories
divide the content by topic.

JSAV: The JavaScript Algorithm Visualization library (JSAV). This is sourced
from: https://github.com/vkaravir/JSAV and is updated occassionally.  
More information about JSAV can be found here:
http://jsav.io/

lib: System-wide library files

Makefile: Primarily for source file validation and to generate some of the
"textbooks" to the Books directory.

MIT-license.txt: The license file. OpenDSA is distributed under an MIT open
source license.

ODSAkhan-exercises: Obsolete, will be removed soon. We used to keep
our own hacked-up copy of the Khan Academy exercise framework.

QBank: A question bank system under development. This is a submodule maintained
at: https://github.com/cashaffer/QBank.

README.md: This file

RST: Contains our custom Sphinx directives used during the build process and the
source for tutorial content written in reStructuredText (RST) format and divided
by language and sub-divided by topic area.

SourceCode: The sourcecode for code snippets contained in the tutorials.
Ultimately, we hope to support code snippets in Processing (a Java dialect),
Python, and JavaScript. In this way, instructors would be able to generate
versions of tutorials that support any or all of these three languages.

**Storyboard: Materials related to "storyboarding" designs for tutorials. This
concept never gained much traction, and this might be removed at some point.**

WebServer: A command for invoking a simple python-based web server that will
enable you to run the Khan Academy exercises if your machine is not running a
true web server. You only need to have python installed for this to work.

khan-exercises: The Khan Academy exercise framework.  This is a submodule maintained
at: https://github.com/OpenDSA/khan-exercises. This is a mirror of the
actual khan-exercises repository
(https://github.com/Khan/khan-exercises), that we buffer here for
stability.
