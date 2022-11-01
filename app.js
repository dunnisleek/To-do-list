const app = Vue.createApp({
    data(){
        return { 
            enteredGoalValue:'',
            goal:[]
    };
    },
    methods:{
        addGoal(){
          this.goal.push(this.enteredGoalValue);
        },
        // this is to delete or remove an item from the lists
        removeGoal(idx){
            this.goal.splice(idx,1);
        }
    }
});

app.mount('#user-goal')