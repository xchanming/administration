const e={methods:{saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.settings.delivery.time.detail",params:{id:this.deliveryTime.id}})},createdComponent(){Cicada.State.commit("context/resetLanguageToDefault"),this.deliveryTime=this.deliveryTimeRepository.create()}}};export{e as default};
//# sourceMappingURL=index-D5N1Dbkd.js.map
