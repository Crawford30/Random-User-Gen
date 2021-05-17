const app = Vue.createApp({
	
	data(){

		return  {
			firstName: 'John',
			lastName: 'Joel',
			email: 'joelcrawford@gmail.com',
			gender: 'male',
			picture: 'https://randomuser.me/api/portraits/men/10.jpg'
		}

	}
})


app.mount('#app')