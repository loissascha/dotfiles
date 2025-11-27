if status is-interactive
	# Commands to run in interactive sessions can go here
	alias tnew="tmuxinator new"
	alias tstart="tmuxinator start"
	alias tstop="tmuxinator stop"
	alias tlist="tmuxinator list"
	alias dev="distrobox enter development"
	alias vim="nvim"
	alias rec="asciinema"
	alias croc="croc"
	alias nvimgodot="nvim --listen ./godothost"
	alias ga="git add"
	alias gs="git status"
	alias gp="git push"
    alias gc="git commit -m"
    alias gb="git checkout -b"
	alias aic="aicommit --confirm"
	alias btrfsbalance="sudo btrfs balance start -dusage=50 /"
	alias analyserootdisk="ncdu / --exclude /home"
	alias analysehomedisk="ncdu /home"
	alias cleanyaycache="yay -Scc"
    alias gitui="lazygit"
    alias multi="tmux"
    alias benchmark="hyperfine"
	alias countlines="tokei"
    alias mc="yazi"
	alias design="nwg-look"

	fish_add_path $HOME/.local/bin # correct way to add stuff to your $PATH in fish
	fish_add_path $HOME/go/bin
	fish_add_path $HOME/.dotnet/tools
	export EDITOR=vim
	export PiANetConnection='Host=192.168.0.96;Port=5432;Database=piaNetTest;Username=postgres;Password=root'

end

# bun
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH

set -gx GEMINI_API_KEY (cat ~/.config/gemini_token)

if command -v starship >/dev/null 2>&1
    starship init fish | source
end

zoxide init --cmd cd fish | source
fastfetch
starship init fish | source

# opencode
fish_add_path /home/sascha/.opencode/bin
