@echo off
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo npm install failed
    pause
    exit /b %errorlevel%
)

echo.
echo Building project...
call npm run build
if %errorlevel% neq 0 (
    echo npm run build failed
    pause
    exit /b %errorlevel%
)

echo.
echo Running react-snap for SSG...
call node prerender.js
if %errorlevel% neq 0 (
    echo react-snap failed
    pause
    exit /b %errorlevel%
)

echo.
echo SSG Build completed successfully!
pause
