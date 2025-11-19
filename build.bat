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
echo Build completed successfully!
pause
