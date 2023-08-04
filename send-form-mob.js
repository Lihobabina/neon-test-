document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('myForm-mob');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		let formData = new FormData(form);
		formData.append('image', formImageMob.files[0]);
		if (error === 0) {
			let response = await fetch('send-mail-mob.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreviewMob.innerHTML = '';
				form.reset();
			} else {
				alert("Error");
			}
		} else {
			alert('Fill in required fields');
		}

	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelector('.req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('emailMob')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.classList.add('error');
	}
	function formRemoveError(input) {
		input.classList.remove('error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	const formImageMob = document.getElementById('formImageMob');
	const formPreviewMob = document.getElementById('formPreviewMob');
	formImageMob.addEventListener('change', () => {
		uploadFile(formImageMob.files[0]);
	});
	function uploadFile(file) {
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Only images allowed');
			formImageMob.value = '';
			return;
		}
		var reader = new FileReader();
		reader.onload = function (e) {
			formPreviewMob.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	}
});