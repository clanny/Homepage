
let noticeObject = document.getElementById(`gateway_notice`)
if (window.location.href.includes(`gateway=true`)) {
    noticeObject.style = `width: 100%; background-color: #1f212e; padding: 20px; text-align: center; z-index: 1000000;`
}