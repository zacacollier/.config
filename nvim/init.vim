" -*- mode: vimrc -*-
"vim: ft=vim

" dotspaceneovim/auto-install {{{
  "Automatic installation of spaceneovim.
  if has('nvim')
    let s:config_dir = $HOME . '/.config/nvim'
  else
    let s:config_dir = $HOME . '/.vim'
  endif
  let s:autoload_spaceneovim = expand(resolve(s:config_dir . '/autoload/spaceneovim.vim'))
  if empty(glob(s:autoload_spaceneovim))
      silent execute '!curl -fLo ' . s:autoload_spaceneovim . ' --create-dirs https://raw.githubusercontent.com/tehnix/spaceneovim/master/autoload/spaceneovim.vim'
  endif
" }}}

" dotspaceneovim/layers {{{
  "Configuration Layers declaration.
  "You should not put any user code in this block.
  let g:dotspaceneovim_configuration_layers = [
  \  '+nav/buffers'
  \, '+nav/files'
  \, '+nav/quit'
  \, '+nav/windows'
  \, '+nav/start-screen'
  \, '+nav/text'
  \, '+checkers/neomake'
  \, '+completion/deoplete'
  \, '+tools/terminal'
  \, '+ui/airline'
  \, '+ui/toggles'
  \, '+checkers/syntastic'
  \, '+lang/javascript'
  \]

  let g:dotspaceneovim_additional_plugins = [
  \  {'name': 'flazz/vim-colorschemes', 'config': {}}
  \,  {'name': 'tpope/vim-sensible', 'config': {}}
  \,  {'name': 'chriskempson/base16-vim', 'config': {}}
  \,  {'name': 'elmcast/elm-vim', 'config': {}}
  \,  {'name': 'ervandew/supertab', 'config': {}}
  \,  {'name': 'flowtype/vim-flow', 'config': { 'filetypes': 'javascript' }}
  \,  {'name': 'godlygeek/tabular', 'config': {}}
  \,  {'name': 'jiangmiao/auto-pairs', 'config': {}}
  \,  {'name': 'junegunn/fzf', 'config': { 'dir': '~/.fzf', 'do': './install --all' }}
  \,  {'name': 'junegunn/fzf.vim', 'config': {}}
  \,  {'name': 'junegunn/goyo.vim', 'config': {}}
  \,  {'name': 'junegunn/limelight.vim', 'config': {}}
  \,  {'name': 'mxw/vim-jsx', 'config': {}}
  \,  {'name': 'pangloss/vim-javascript', 'config': {}}
  \,  {'name': 'scrooloose/nerdcommenter', 'config': {}}
  \,  {'name': 'shime/vim-livedown', 'config': {}}
  \,  {'name': 'terryma/vim-multiple-cursors', 'config': {}}
  \,  {'name': 'tpope/vim-surround', 'config': {}}
  \,  {'name': 'luochen1990/rainbow', 'config': {}}
  \,  {'name': 'benjie/neomake-local-eslint.vim', 'config': {}}
  \]

  let g:dotspaceneovim_excluded_plugins = []
  " let g:dotspaceneovim_escape_key_sequence = 'fd'
" }}}

" dotspaceneovim/init {{{
  "Initialization block.
  "This block is called at the very startup of Spacemacs initialization
  "before layers configuration.
  "You should not put any user code in there besides modifying the variable
  "values.
  " Map the leader key to <Space>
  let g:mapleader = ' '
  " Shorten the time before the vim-leader-guide buffer appears
  set timeoutlen=100
  " Enable line numbers
  " Set 7 lines to the cursor - when moving vertically using j/k
  set scrolloff=7
  " Use relative line numbers. Options are:
  " - relativenumber/norelativenumber
  " - number/nonumber
  set relativenumber
  " Always show the status line
  set laststatus=2
" }}}

" dotspaceneovim/user-init {{{
  "Initialization block for user code.
  "It is run immediately after `dotspaceneovim/init', before layer
  "configuration executes.
  "This block is mostly useful for variables that need to be set
  "before packages are loaded. If you are unsure, you should try in setting
  "them in`dotspaceneovim/user-config' first."

  " Load external user-init if found
  if filereadable(s:config_dir . '/user-init.vim')
    execute 'source ' . s:config_dir . '/user-init.vim'
  endif
" }}}

call spaceneovim#bootstrap()

" dotspaceneovim/user-config {{{
  "Configuration block for user code.
  "This function is called at the very end of SpaceNeovim initialization after
  "layers configuration.
  "This is the place where most of your configurations should be done. Unless
  "it is explicitly specified that a variable should be set before a package is
  "loaded, you should place your code here."

  " Shared system clipboard
  set background=dark
  set clipboard=unnamed
  try
    let base16colorspace=256
    colorscheme base16-tomorrow-night
  catch
  endtry
  set list                " Show problematic characters.
  " better searching
  set ignorecase          " Make searching case insensitive
  set smartcase           " ... unless the query has capital letters.
  set gdefault            " Use 'g' flag by default with :s/foo/bar/.
  set magic               " Use 'magic' patterns (extended regular expressions).
  " Italic comments
  highlight Comment gui=italic
  highlight Comment cterm=italic
  " Use <C-L> to clear the highlighting of :set hlsearch.
  if maparg('<C-L>', 'n') ==# ''
    nnoremap <silent> <C-L> :nohlsearch<CR><C-L>
  endif
  " Shift-l / -h to change tabs
  noremap <S-l> gt
  noremap <S-h> gT
  " Use ; for commands.
  nnoremap ; :

  " UI general configs
  set showcmd             " Show (partial) command in status line.
  set showmatch           " Show matching brackets.
  set showmode            " Show current mode.
  set ruler               " Show the line and column numbers of the cursor.
  set number              " Show the line numbers on the left side.
  set formatoptions+=o    " Continue comment marker in new lines.
  set textwidth=0         " Hard-wrap long lines as you type them.
  set expandtab           " Insert spaces when TAB is pressed.
  set tabstop=2           " Render TABs using this many spaces.
  set shiftwidth=2        " Indentation amount for < and > commands.


  if !&scrolloff
    set scrolloff=3       " Show next 3 lines while scrolling.
  endif
  if !&sidescrolloff
    set sidescrolloff=5   " Show next 5 columns while side-scrolling.
  endif
  set nostartofline       " Do not jump to first character with page commands.

  " Rainbow parens
  let g:rainbow_active = 1
  " Normalize markdown indentation
  let g:vim_markdown_new_list_item_indent = 2
  let g:vim_markdown_folding_disabled = 1
  set conceallevel=2
  " JSX Highlighting
  let g:jsx_ext_required = 0
  " Syntax checkers
  let g:syntastic_always_populate_loc_list = 1
  let g:syntastic_auto_loc_list = 1
  let g:syntastic_javascript_checkers           = ['eslint']
  let g:neomake_javascript_enabled_makers       = ['eslint']
  let g:syntastic_elm_checkers = ['elm_make']
  " JS Conceals
  let g:javascript_conceal_function             = "ƒ"
  let g:javascript_conceal_null                 = "ø"
  let g:javascript_conceal_return               = "⇚"
  let g:javascript_conceal_NaN                  = "ℕ"
  let g:javascript_conceal_arrow_function       = "⇒"
  " Since syntastic is synchronous, checking on open can be quite slow
  let g:syntastic_check_on_open = 0
  let g:syntastic_check_on_wq   = 0
  " Likewise because of synchronous operations, multiple checkers are slow
  let g:syntastic_aggregate_errors = 0
  " Make statusline look a bit more condensed and nicer
  let g:syntastic_stl_format = '%E{E:%e (%fe)}%B{, }%W{W:%w (%fw)}'

  " vim-flow checker settings
  let g:flow#autoclose = 0
  let g:flow#enable = 0


  let g:lmap.e = { 'name': '+errors' }
  call SpaceNeovimNMap('er', 'syntastic-check-file', 'SyntasticCheck')
  call SpaceNeovimNMap('ev', 'syntastic-version', 'SyntasticInfo')
  call SpaceNeovimNMap('el', 'syntastic-error-list', 'lopen')
  call SpaceNeovimNMap('ec', 'syntastic-close-error-list', 'lclose')
  call SpaceNeovimNMap('en', 'syntastic-next-error', 'lnext')
  call SpaceNeovimNMap('ep', 'syntastic-previous-error', 'lprevious')

  call SpaceNeovimNMap('eC', 'quickfix-close-error-list', 'cclose')
  call SpaceNeovimNMap('eL', 'quickfix-error-list', 'copen')
  call SpaceNeovimNMap('eN', 'quickfix-next-error', 'cn')
  call SpaceNeovimNMap('eP', 'quickfix-previous-error', 'cp')

  " Load external user-config if found
  if filereadable(s:config_dir . '/user-config.vim')
    execute 'source ' . s:config_dir . '/user-config.vim'
  endif
" }}}
