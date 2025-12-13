@echo off
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders" /v Personal /t REG_EXPAND_SZ /d "C:\Users\%USERNAME%\Documents" /f
pause