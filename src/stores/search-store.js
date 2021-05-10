import { observable, action, computed } from "mobx";

// mobx ver6부터는 decorator가 deprecated되어, makeObservable 또는 makeAutoobservable을 사용해야 함.
class SearchStore {
  @observable
  search = "initVal";

  @observable
  num = 0;

  @action
  updateSearch = (val) => {
    this.search = val;
    console.log("updated! : ", this.search);
  };

  @action
  increaseNum() {
    this.num++;
    console.log("updated! : ", this.num);
  }

  @computed
  get computedSearch() {
    return "hello " + this.search;
  }

  @computed
  get computedDoubleNum() {
    return 2 * this.num;
  }
}

export default new SearchStore();
