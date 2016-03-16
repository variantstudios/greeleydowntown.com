# Greeley DDA: greeleydowntown.com

# Get your local environment setup on OSX

## Install Homebrew

`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## Install Node 0.10 (which includes npm)

`$ brew install node010`



# Setup the site

## Clone the repo

Create and move to the directory where you want to copy the site/repo:
{% highlight ruby %} $ mkdir ~/VS/greeleydowntown.com/local && ~/VS/greeleydowntown.com/local {% endhighlight %}

Clone the repo into the local directory:
{% highlight ruby %} $ git clone https://github.com/variantstudios/greeleydowntown.com . {% endhighlight %}

## Setup the site

### Install the Ruby Gems
`$ bundle install`

### Install the Node packages
`$ npm install`

## Compile 

To compile Jekyll, SASS and run a local server (with browsersync) you'll need to run `$ gulp`