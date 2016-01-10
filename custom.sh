# install node.js
sudo apt-get install --yes curl
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install --yes nodejs

# install oh my zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# 1. Add the Spotify repository signing key to be able to verify downloaded packages
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886

# 2. Add the Spotify repository
sudo echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list

# 3. Update list of available packages
sudo apt-get update

# 4. Install Spotify
sudo apt-get install -y spotify-client

# get dropbox key
sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 5044912E

# add dropbox repository
sudo sh -c 'echo "deb http://linux.dropbox.com/ubuntu/ trusty main" >> /etc/apt/sources.list.d/dropbox.list'

sudo apt-get update

sudo apt-get install -y dropbox nemo-dropbox
