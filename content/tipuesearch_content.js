var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 四設計一甲 41023146 \n 網站倉儲:\xa0 https://github.com/41023146/cp2021_hw \xa0 \n 網站連結:  https://41023146.github.io/cp2021_hw/ \xa0\xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Git', 'text': '推薦-> Git & GitHub 教學手冊 \n \n', 'tags': '', 'url': 'Git.html'}, {'title': 'git 指令', 'text': 'git init  將目前的目錄初始化為 Git 目錄, 建立本地儲存庫     git config  設定或檢視 Git 設定檔資訊     git add  將檔案加入 Git 暫存區     git rm  將檔案移出 Git 暫存區     git status  顯示 Git 狀態     git commit  將暫存區的檔案提交至儲存庫納入版本控制     git log  顯示過去歷次的版本異動     git reflog  顯示完整的版本異動歷史紀錄     git show  顯示指定版本的異動內容     git branch  建立一個新分支 (branch)     git checkout  取出分支內容還原為工作目錄     git merge  合併分支     git reset  重設某一版本     git clone  從遠端儲存庫 (GitHub 或 Bitbucket) 複製副本至本地儲存庫     git push  將本地儲存庫內容推送到遠端儲存庫     git pull  將遠端儲存庫拉回合併更新到本地儲存庫 \n', 'tags': '', 'url': 'git 指令.html'}, {'title': 'git push', 'text': '1.如果你要將更新推送至遠端,首先必須要有使用者名稱和信箱 \n \xa0你可以在命令列上輸入: \n \xa0 git config --global user.email "you@example.com" \n \xa0 git config --global user.name "Your Name" \n 如果輸入成功你應該會在home_ipv4或6(看你用什麼開)裡找到叫.gitconfig的檔案 \n 你的使用者名稱和信箱就存在裡面 \n 2.你必須要有 token 或者 ssh (我在其他頁面有講) \n \n 3.最後你可以用 acp " *** " 指令推送( *** 是你本次版本更新的名稱(內容))', 'tags': '', 'url': 'git push.html'}, {'title': 'tokens', 'text': '1.github頭象下的Setting->Developer settings->Personal access tokens \n 2.按Generate new token生成一把token( repo記得打勾) \n 3.將生成的那串密碼貼在.git裡的config裡的url =  http://*@github.com..... \xa0 \n *的地方(,記得後面加@)', 'tags': '', 'url': 'tokens.html'}, {'title': 'ssh push', 'text': '1.下載 putty . \n 2.用PuTTY裡的puttygen.exe做一把金鑰 \n (先按Generate然後滑鼠亂動一下) \n 3.將key存到遠端github \n (帳號頭象下Settings裡的SSH and GPG keys) \n 4.回到 puttygen.exe案save private key(可以存到home_ipv4或6) \n 5.然後開啟PuTTY裡的putty.exe,在hostname和saved sessions欄位都填入github.com(先save), \n 然後將SSH裡的Auth指向你存的金鑰(再save) \n 6.按一下open \n 7.將倉儲裡的.git裡的config用編譯器打開,將[remote "origin"] \n 改成 url =  git@github.com:(自己帳號)/cp2021_hw.git \n 8.記得確認start_ipv4.bat裡有set GIT_SSH=%Disk%:\\PuTTY\\plink.exe \n \n \n', 'tags': '', 'url': 'ssh push.html'}, {'title': 'Exam', 'text': '', 'tags': '', 'url': 'Exam.html'}, {'title': 'w13', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n  ****************************** keyword start  \n \n \n \n \n \n \n 列出 10 個座標 畫表格 隨機生成方格 隨機生成方格plus', 'tags': '', 'url': 'w13.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 必須在 2021.10.20 22:00 之前完成 . \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.10.20 22:00 關閉 \n \n HW1程式碼 :\xa0 https://gist.githubusercontent.com/41023146/5d5b274e44ba3400046ad7d104a4c511/raw/a47a4054d2176c2d5b9ec617c078b804d2e89ea2/hw%25201-1 \n HW2程式碼 :\xa0 https://gist.githubusercontent.com/41023146/748bad2208b682b9670350a061ee10e9/raw/f31c6bb040e3775b1107a6cc68c7dc08c3073e6b/hw%25201-2 \xa0 \n 英文打字(70min19s)\xa0 :\xa0 https://gist.githubusercontent.com/41023146/d2f010c408fef854403a1b7cbbe9519c/raw/87878aaa142ee6ec202d28b6246542ef2c2da5ee/hw%25201-3 \xa0 \n 中文打字 (18min43s) :\xa0 https://gist.githubusercontent.com/41023146/01adf67e79714a6c9059ea10b178347f/raw/0a9146f5f1fccfa6a6768bff42660151b272718c/hw%25201-4 \xa0 \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於 \xa0 2021.11.03 22:00 關閉 \n \xa0 \n 1.(可攜程式系統_1) \n \n 2.(可攜程式系統_2) \n \n \n 3.(動態頁面) \n \n \n 4.( run頁面 ) \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': '作業倉儲網站', 'text': '1.首先要進到老師的作業倉儲\xa0 https://github.com/mdecourse/cp2021_hw \xa0 \n 2.然後點 Use this template 這個按鈕,並在 Repository name欄位輸入cp2021_hw \n 3.有了遠端的倉儲模板,然後就要把它弄到近端來 \n \xa0 先用 cd tmp 指令到達tmp目錄下 \n \xa0 然後用這段指令:git clone --recurse-submodules (你的倉儲網址+.git)/ \n (也可以在倉儲Code按鈕下複製) \n 4.還要裝一個子模組 ( pip install pyopenssl) 直接打在黑框裡就好 \n 5.最後用cd cp2021_hw 到你的倉儲目錄下 打 cms 開啟動態網站 \n', 'tags': '', 'url': '作業倉儲網站.html'}, {'title': 'problem', 'text': '\xa0 \xa0 \xa0因為老師的作業倉儲也開始改版了,所以如果我們現在克隆他的倉儲,會都是老師的東西(包括動態網站),那如何讓動態網站變為原來的樣子勒?(下面是我的方法) \n 1.首先我們需要到老師的作業倉儲點擊顯示改版次數的位置,拉到第一次改版的地方點 <>這個按鈕 \n 2.然後你就會回到第一個版本,因為老師動態網頁的內容都存在config/content.htm裡,所以你點進去就可以找到老師動態網頁的原始碼,然後複製下來 \n 3.最後來到你近端(你資料夾裡)data/tmp/cp2021_hw/config裡將 content.htm丟進編譯器,並全選貼上剛複製下來的東西並儲存,最後開啟動態網站就會變回原來的模板(記得推回遠端github) \n \n \xa0\xa0 \n \xa0', 'tags': '', 'url': 'problem.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n \n 改編之老師直覺貪食蛇,目前紀錄是118節 \n \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch', 'tags': '', 'url': 'HW3.html'}, {'title': 'Examples', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. (本動態頁面檔案  Examples.txt ) \n 1. 從 1 累加到 100 (以下列 button 呈現). \n 2. 教科書 ( Programming with Python ) 2.6 Exercises, 共有三個題目, 請分別將程式製作為按鈕 (button). \n 3. 請利用  Canvas  繪製 Fig. 3.7 的流程圖 (Flow Chart). \n 4. 請利用 Canvas 繪製你所編寫"從 1 累加到 10"程式的流程圖 (Flow Chart). \n 5. 請各班各組合力完成 3.5 Exercises 中的 14 個題目. \n 6. 請各組從 4.3 Exercises 中選擇一個題目製作為頁面中的按鈕 (button). \n 無  Canvas  繪圖需求的程式, 可放在第一區, 而採  Canvas  繪圖的程式則可放入第二區. \n 將 Gist 中的程式導入本頁面的程式段:  brython_button_prog.txt , 只要配合 button id 對應即可導入編輯區. \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 開始 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 結束 \n \n  button 程式 1 ####################################### button 程式 1 開始 \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束   button 程式 1 ####################################### button 程式 1 結束 \n \n  button 程式 2 ####################################### button 程式 2 開始 \n 第二編輯區程式 ( 編輯  Snake 原始碼): \n 查驗輸入字串 Snake \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n \n  button 程式 2 ####################################### button 程式 2  結束 \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n References: \n https://zerojudge.tw/ \n https://shaform.com/csdream/docs/problem-solving/ \n https://onlinejudge.org/ \n \n', 'tags': '', 'url': 'Examples.html'}, {'title': 'W11', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n  ****************************** keyword start  \n \n \n \n \n \n \n \n \n 1加到100 2.6_1 2.6_2 2.6_3 2.6_3plus \n', 'tags': '', 'url': 'W11.html'}, {'title': 'problem1', 'text': 'import math \n import sympy\xa0 \n x = sympy.symbols("x") def f(a):  return math.sin(a) def t(x):  return math.exp(-x)   print (sympy.solve(math.exp(-x)*0.8 - f(x),x)) \n 1.python教科書的4-3 Exercises 第一題 \n 自然對數e和sin函數可以用math 模組解決,但方程式和未知數的模組導入都會出現錯誤', 'tags': '', 'url': 'problem1.html'}, {'title': 'snake', 'text': '1.蛇自動去尋找莓果(v) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  ...........*無法將1.2.組合(蛇吃到莓果不會再生成一顆) (以解決) \n 2.莓果隨機出現在畫布(v) \n \n 3.蛇有尾巴(x) \n \n 4.頭碰到尾巴會回復五結(x) \n \n 5.蛇吃到莓果會多一截尾巴(x) \n \n 6.計分表(x)', 'tags': '', 'url': 'snake.html'}, {'title': 'snake t1', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'snake t1.html'}, {'title': 'snake t2', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'snake t2.html'}, {'title': 'ai snake', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'ai snake.html'}, {'title': 'snake_berry', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'snake_berry.html'}, {'title': 'Bsnake', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'Bsnake.html'}, {'title': 'progress rate', 'text': '\n week 1 \n 1.熟悉課程網頁 \xa0 mde.tw \n 2.建立github帳號 \n week 2 \n 1.建立可攜系統(將ipv6貼到ipv4在替換home_ipv4,ipv4還是開不了)=>沒save \n 2建立github倉儲(使用Use this template抓取作業網站模板) \n week 3 \n 1.用課程網站練習hw1_1並成功執行 \n 2.將遠端github倉儲用git克隆到近端 \n week 4 \n 1.嘗試 hw1_2 失敗(按鈕有出來但方塊沒動)=>doc["power"].bind("click", gametion)階層放錯 \n 2.將hw1內容加入gist \n week 5 \n 1.在近端用cms開啟動態網站,嘗試加入run頁面 失敗(沒有編輯區) \n 2.詢問老師run頁面失敗原因=>得知是動態與靜態的區別 \n week 6 \n 1.將近端更新用git指令和token堆送到github \n 2.因為是照著老師作的不知道原理=>學習 git 指令 \n week 7 \n 1.嘗試運用ssh來推送(推送失敗)=>找到前一屆ssh的 教學 \n \xa0 \xa0=>發現是在運用putty.exe連線時沒按save(第二次了 ) \n week 8 \n 1.學習GitExtensions來更新版本(需自行下載KDiff3) \n week 9 \n 1.在使用GitExtensions時發現無法用ssh更新版本 \n \xa0 =>發現是GitEtensions設定中指定使用ssh客戶端選擇了OpenSSH,而沒有選擇PuTTY \n week 10 \n 1.學習如何用Python的for迴圈寫1連加到10的程式,並加入run頁面的按鈕 \n 2.嘗試將倉儲push到Gitlab(失敗)(week15\xa0 已解決) \n week 11 \n 1.嘗試從頭建立新倉儲和動態網站 \n week 12 \n 1.利用編譯器修改config裡的content.htm和config從而修改w11的動態網站 \n 2.閱讀python教科書並在命令列用python練習 \n week 13 \n 1.將本課程所學到的東西、方法、心得整理到作業網站(像是git,token,ssh) \n 2.完成w13 Exam並完成延伸,並自己再繼續延伸,對python也有了更多了解 \n week 14 \n 1.和同學嘗試寫程式,像是:簡易計算機,猜數字遊戲,並添加至run頁面 \n 2.完成python教科書2_6的三個例題 \n 3.從頭製作ai snake程式,並統整問題 \n 4.將老師貪食蛇改為有啟動和加減速功能 \n week 15 \n 1.學會pull requests和如何用反向 pull requests將原倉儲更新拉回 \n 2.將github的cp2021_hw倉儲備份到gitlab(week10問題已解決) \n 3.開始整理並製作本課程期末報告', 'tags': '', 'url': 'progress rate.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'run', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n  ****************************** keyword start  \n \n \n \n \n \n \n \n \n \n \n \n \n \n Keyword hw1_1 hw1_2 snake ai_snake a_to_b w13 畫表格 隨機生成方格 隨機生成方格plus 簡易計算機 猜數字遊戲', 'tags': '', 'url': 'run.html'}, {'title': 'runsrc', 'text': '\n ( run.txt )', 'tags': '', 'url': 'runsrc.html'}, {'title': 'game', 'text': '\n \n', 'tags': '', 'url': 'game.html'}, {'title': '41023146', 'text': '1.作業一的紅色方塊 \n hw1_1 hw1_2 \n 2.第十三週考試及延伸 \n w13 畫表格 隨機生成方格 隨機生成方格plus \n 3.python教科書習題 \n 1加到100 2.6_1 2.6_2 2.6_3 2.6_3plus \n 4.作業三貪食蛇 \n snake snake_t1 snake_t2 snake_berry ai_snake Bsnake \n 5.其他及小遊戲 \n 簡易計算機 猜數字遊戲 \n \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \xa0 \n =================================================================\xa0 \n \n 1.關於hw1的紅色方塊,是我第一次接觸python,一開始什麼都看不懂,到後來才發現是用browser.timer這個模組配合if迴圈使函式隔一段時間執行一次產生移動的效果,還有將方塊著做成有啟動和暫停按鈕,我一開始因為不熟悉課程網站沒找到Cango裡的fourbar按鈕,所以我在網上查了很多python的資料,雖然那些資料沒讓我做出按鈕,但也讓我學到很多(最後還是找到fourbar按鈕才學會的)。 \n \n 2.在w13的測驗中我學會了random的用法並完成延伸,我發現如果延伸中的數字改成方塊是不是可以做成貪食蛇中那個隨機生成的莓果,然後我就再延伸了兩個按鈕出來。 \n \n 3.在第十二周的時候用cmd啟動python來熟悉python的基本運算,並在之後完成了pthon教科書2_6的習題並做成按鈕。 \n \n 4.作業三一開始我不知道是要從頭做一隻貪食蛇還是改編老師的貪食蛇,所以我就從頭開始做,一開始是從作業一的方塊開始改,第一個完成的是sanke_t1這隻只有頭且只能吃一次方塊的蛇,然後我用w13延伸做出了貪食蛇的莓果snake_berry,最後將這兩個融合成snake_t2,然後我看到學長交的作業是改編老師的貪食蛇,所以我又做了ai_sanke,最後我看到同學在貪食蛇上加按鈕,然後我就結合老師snake和Bsnake的按鈕做了一個Bsnake。 \n \n 5.簡易計算機和猜數字遊戲是我和 41023121 同學一起完成的,在製作的過程中第一次用到input這個東西,發現它可以用來輸入東西去與程式裡的東西氣比較和判斷。 \n \n =================================================================\xa0 \n 期末心得 \n 在本學期計算機程式的課程我學習到了很多,像是 github倉儲管理、python程式、網站動態編輯還有很多東西,我覺得我學習到最重要的技能有兩個: \n 1.一個是github倉儲管理,讓我們不用擔心資料不見,並且如果有新組員不需要再去教他,他可以看著我們倉儲之前的版本跟上我們進度。 \n 2.第二個是可以查到自己需要的資料的能力,因為我發現程式的東西不可能全部都學會並背起來,一定是有需要在去查,所以查資料的能力很重要。 \n  ****************************** keyword start  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '41023146.html'}]};