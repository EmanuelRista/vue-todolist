const app = new Vue({
	el: '#root',
	data: {
		elementList: [],
        elementInput: '',
        isActive: false
	},
	methods: {
		createEl: function() {
			if(this.elementInput != ''){
				this.elementList.push(this.elementInput);
				this.elementInput = '';
			}
		},
		removeElement: function(index) {
			this.elementList.splice(index, 1);
        }
    }
})
