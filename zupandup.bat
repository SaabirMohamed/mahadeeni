echo off
echo compresseing
@7z a -r ../zips/%2 -p%1 %3 -xr!node_modules
echo sending up
@cd ..
@cd ..
@cd zips
@git add -A 
@git commit -m "Saabir4Mahadeeni-%4"
@git push origin master
@cd ..\gadeeja\mahadeeni



