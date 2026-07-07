document.addEventListener('DOMContentLoaded', () => {
    const partnershipForm = document.getElementById('partnershipForm');
    if (partnershipForm) {
        partnershipForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Terima kasih! Formulir penawaran kerjasama Anda telah berhasil dikirim.');
            this.reset();
        });
    }
});
