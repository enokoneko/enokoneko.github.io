# Apple Books导出的ePub文件无法用其他任何软件打开
### 当前解决方案
使用[ePub Zip-Unzip.app](https://www.mobileread.com/forums/showthread.php?t=55681)。参考：[reddit帖子](https://www.reddit.com/r/Calibre/comments/dza1zi/how_do_i_package_files_from_ibooks_own_files_not/)
1. 文件重命名，去掉或更改.epub扩展名
2. 拖拽文件到`ePub Zip-Unzip.app`上

这将创建同名ePub文件到app所在目录，该文件可正常使用。
### 其他相关信息
- Apple Books存储路径\
`‌~/Library/Mobile Documents/iCloud~com~apple~iBooks/Documents`

- 从Apple Books直接导出的epub包含很多xattr属性，用[xattred](https://eclecticlight.co/xattred-sandstrip-xattr-tools/)能看到。
	/assets/img/241013-065035.png
其中`com.apple.quarantine`和`com.apple.macl`是近年来macOS新加的，如果修改xattr属性后还会自动新增`com.apple.provenance`。
xattred能删掉常规的xattr属性，但这三个属性很不容易去除，它们在系统层面收到保护（SIP）。在网上能搜到很多[相关讨论](https://eclecticlight.co/2020/01/30/quarantine-sip-and-macl-macos-per-file-security-controls/)。

- 用Terminal.app删除provenance（其他终端工具不行）。参考：[stackexchange](https://apple.stackexchange.com/a/463956/348900)。\
`xattr -d com.apple.provenance FILE`

- 外置盘法删除macl\
复制文件到其他磁盘上，再用xattred删除。

- 用[maclTackle.command](https://gist.github.com/brunerd/d9ea487b7d2faab9712a221592a2ee58#file-macltackle-command)剥离所有xattr属性。参考[这篇文章](https://www.brunerd.com/blog/2020/01/07/track-and-tackle-com-apple-macl/)。
	1. 下载maclTackle.command
	2. 用`chmod +x maclTackle.command`赋予执行权限
	3. 执行`maclTackle.command FILE`
