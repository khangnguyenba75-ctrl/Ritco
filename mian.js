// Kiểm tra trạng thái mạng mỗi giây
setInterval(() => {
    const errorBox = document.getElementById('wifi-error');
    if (!navigator.onLine) {
        errorBox.style.display = 'flex';
    } else {
        errorBox.style.display = 'none';
    }
}, 1000);

function openWifiSettings() {
    // Gọi hàm mở cài đặt Wi-Fi trên thiết bị (dùng tool API)
    // Hoặc điều hướng đến trang cài đặt của hệ điều hành
    window.location.href = "settings://wifi"; 
}
