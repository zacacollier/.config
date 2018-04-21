#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

BASE16_SHELL=$HOME/.config/base16-shell/
[ -n "$PS1" ] && [ -s $BASE16_SHELL/profile_helper.sh ] && eval "$($BASE16_SHELL/profile_helper.sh)"

# Customize to your needs...
prompt cloud ' >' white red
base16_tomorrow-night

function chpwd() {
    emulate -L zsh
    ls -a
}

 # nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

alias ga='git add'
alias gst='git status'
alias gcm='git commit -m'
alias gri='git rebase -i'
alias glog='git log --pretty=oneline'
alias tma='tmux attach -d'

export PATH=$HOME/.local/bin:$PATH

# tabtab source for serverless package
# uninstall by removing these lines or running `tabtab uninstall serverless`
[[ -f /home/zac/.config/yarn/global/node_modules/tabtab/.completions/serverless.zsh ]] && . /home/zac/.config/yarn/global/node_modules/tabtab/.completions/serverless.zsh
# tabtab source for sls package
# uninstall by removing these lines or running `tabtab uninstall sls`
[[ -f /home/zac/.config/yarn/global/node_modules/tabtab/.completions/sls.zsh ]] && . /home/zac/.config/yarn/global/node_modules/tabtab/.completions/sls.zsh
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
if [ $TILIX_ID ] || [ $VTE_VERSION ]; then
        source /etc/profile.d/vte.sh
fi
