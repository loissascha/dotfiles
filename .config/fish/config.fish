if status is-interactive
    # Commands to run in interactive sessions can go here


    alias ga="git add"
    alias gc="git commit -m"
    alias gp="git push"
    alias gb="git checkout -b"
    alias gitui="lazygit"
    alias multi="tmux"
    alias du="dust"
    alias runGodotMono="cd ~/Software/Godot_v4.2.2-stable_mono && nohup ./Godot_v4.2.2-stable_mono_linux.x86_64 & disown"
    alias vim="nvim"
    alias lvim="/home/sascha/.local/bin/lvim"
    alias cat="bat"
    alias benchmark="hyperfine"
    alias pianetdev="/home/sascha/git/toptech/pianetapi.sh"
    alias piaastrodev="/home/sascha/git/toptech/pianetastro.sh"
    alias piagodev="/home/sascha/git/toptech/pianetgo.sh"
    alias mangoverlaydev="/home/sascha/git/github/loissascha/mangoverlay.sh"
	alias dbplanningdev="/home/sascha/git/github/loissascha/db-planning-tool.sh"
    alias benchmarkdev="/home/sascha/git/github/loissascha/benchmark.sh"
    alias mysqlmanagerdev="/home/sascha/git/github/loissascha/mysqlmanager.sh"
	alias appmemorydev="/home/sascha/git/github/loissascha/go-appmemory.sh"
	alias assertdev="/home/sascha/git/github/loissascha/go-assert.sh"
	alias loggerdev="/home/sascha/git/github/loissascha/go-logger.sh"
	alias countlines="tokei"
    alias mc="yazi"
	alias design="nwg-look"
    #alias fm="yazi"
    
    #export PiANetConnection='server=localhost;port=30306;database=piaNetTest;user=root;password=root'
    export PiANetConnection='Host=localhost;Port=5432;Database=piaNetTest;Username=postgres;Password=root'
    export PATH=$PATH:$HOME/.local/bin
    export PATH=$PATH:/usr/bin
    export PATH=$PATH:$HOME/.dotnet/tools:$HOME/go/bin:$HOME/.local/bin

	export ANDROID_HOME=$HOME/Android/Sdk
	export ANDROID_NDK_HOME=$ANDROID_HOME/ndk-bundle

    #fastfetch
    gofetch
end

# bun
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH

starship init fish | source
