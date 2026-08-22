$ErrorActionPreference = 'Stop'

$ffmpeg = 'C:\Program Files\EVCapture\ffmpeg.exe'
$sourceDir = 'D:\桌面\《丝路莲心》视频制作'
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$videoDir = Join-Path $projectDir 'assets\videos'
$posterDir = Join-Path $projectDir 'assets\posters'

New-Item -ItemType Directory -Force -Path $videoDir, $posterDir | Out-Null

$media = [ordered]@{
    'intro.mp4' = '开篇.mp4'
    '1-a.mp4' = '季佳怡  视频1  1-A.mp4'
    '1-b.mp4' = '季佳怡  视频2  1-B.mp4'
    '2-a.mp4' = '季佳怡  视频3  2-A.mp4'
    '2-b.mp4' = '季佳怡  视频4  2-B.mp4'
    '3-a.mp4' = '任佳怡  视频1  3-A.mp4'
    '3-b.mp4' = '任佳怡  视频2  3-B.mp4'
    '4-a.mp4' = '任佳怡  视频3  4-A.mp4'
    '4-b.mp4' = '任佳怡  视频4  4-B.mp4'
    '5-a.mp4' = '张倩  视频1  5-A.mp4'
    '5-b.mp4' = '张倩  视频2  5-B.mp4'
    '6-a.mp4' = '张倩  视频3  6-A.mp4'
    '6-b.mp4' = '张倩  视频4  6-B.mp4'
    '7-a.mp4' = '贾欣宇  视频1  7-A.mp4'
    '7-b.mp4' = '贾欣宇  视频2  7-B.mp4'
    '7-c.mp4' = '贾欣宇  视频3  7-C.mp4'
}

$index = 0
foreach ($entry in $media.GetEnumerator()) {
    $input = Join-Path $sourceDir $entry.Value
    $output = Join-Path $videoDir $entry.Key
    if (-not (Test-Path -LiteralPath $input)) {
        throw "Missing source video: $input"
    }

    Write-Host ("[{0}/{1}] {2}" -f ($index + 1), $media.Count, $entry.Key)
    & $ffmpeg -y -hide_banner -loglevel error -i $input `
        -map 0:v:0 -map 0:a:0? `
        -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:color=0x090d0c,fps=30" `
        -c:v libx264 -preset fast -crf 24 -profile:v high -level 4.0 -pix_fmt yuv420p `
        -c:a aac -b:a 128k -ar 44100 -ac 2 `
        -movflags +faststart $output

    if ($LASTEXITCODE -ne 0) { throw "ffmpeg failed for $input" }

    & $ffmpeg -y -hide_banner -loglevel error -ss 00:00:03 -i $output -frames:v 1 -vf "scale=960:-2" (Join-Path $posterDir (($entry.Key -replace '\.mp4$','') + '.jpg'))
    if ($LASTEXITCODE -ne 0) { throw "poster extraction failed for $output" }
    $index++
}

Write-Host 'Media preparation complete.'

