# Generated from trgen 0.23.7
$(& Remove-Item *.interp -Recurse -Force ) 2>&1 | Out-Null
$files = New-Object System.Collections.Generic.List[string]
$f = java -jar "C:/Users/Kenne/.m2/antlr4-4.13.1-complete.jar" -depend -encoding utf-8 -Dlanguage=TypeScript   TypeScriptLexer.g4
foreach ($s in $f) {
    $j = $s.Split(" ")[0]
    $files.Add($j)
}
foreach ($f in $files)
{
    $(& Remove-Item $f -Force ) 2>&1 | Out-Null
}
$f = java -jar "C:/Users/Kenne/.m2/antlr4-4.13.1-complete.jar" -depend -encoding utf-8 -Dlanguage=TypeScript   TypeScriptParser.g4
foreach ($s in $f) {
    $j = $s.Split(" ")[0]
    $files.Add($j)
}
foreach ($f in $files)
{
    $(& Remove-Item $f -Force ) 2>&1 | Out-Null
}

$(& Remove-Item node_modules -Recurse -Force ) 2>&1 | Out-Null
$(& Remove-Item package-lock.json -Recurse -Force ) 2>&1 | Out-Null
exit 0
