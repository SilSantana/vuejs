const submissionComponent = {
 template: `
 <div style="display:flex; width: 100%"> 
          <figure class="media-left">
           <img class="image is-64x64"
             :src="submission.submissionImage">
         </figure>
         <div class="media-content">
           <div class="content">
             <p>
               <strong>
                 <a :href="submission.url" class="has-text-info">{{submission.title}}</a>
                 <span class="tag is-small">#{{submission.id}}</span>
               </strong>
               <br>
                 {{submission.description}}
               <br>
               <small class="is-size-7">
                 Submitted by:
                 <img class="image is-24x24"
                  v-bind:src="submission.avatar">
               </small>
             </p>
           </div>
         </div>
        <div class="media-left">
          <span class="icon is-small" @click="updownvote(submission.id,'down')">
            <i class="fa fa-chevron-down"></i>
          </span>
        </div>
         <div class="media-right">
           <span class="icon is-small" @click="updownvote(submission.id,'up')">
             <i class="fa fa-chevron-up"></i>
             <strong class="has-text-info">{{submission.votes}}</strong>
           </span>
         </div>
 </div>
 `,
props: ['submission','submissions'],
  methods: {   
    updownvote(id, action){    
      if(action === 'up'){
        console.log(`Foi votado o produto com id ${id}`);
        const submission = this.submissions.find( sub => sub.id === id);
        submission.votes ++;
      }else {
        console.log(`Foi removido o voto do produto com id ${id}`);
        const submission = this.submissions.find( sub => sub.id === id);
        submission.votes --;
      }
    },
  }
}

new Vue({
   el: '#app',
   data: {
      submissions: Seed.submissions,
      sortOrder: 'desc'
   },
  computed: {
    sortedSubmissions(){
      console.log(`Sorted by ${this.sortOrder}`);  
      return this.submissions.sort((a,b) => {
          let modifier = 1;
          if(this.sortOrder === 'desc') modifier = -1;
          if(a.votes < b.votes) return -1 * modifier; if(a.votes > b.votes) return 1 * modifier;
          return 0;
      });
    }, 
  },
  methods: {
    updownvote(id, action){
      if(action === 'up'){
        console.log(`Foi votado o produto com id ${id}`);
        const submission = this.submissions.find( sub => sub.id === id);
        submission.votes ++;
      }else {
        console.log(`Foi removido o voto do produto com id ${id}`);
        const submission = this.submissions.find( sub => sub.id === id);
        submission.votes --;
      }
    },
    sort: function(){    
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';     
    }  
  },
  components: {
    'submission-component': submissionComponent,
  }

})