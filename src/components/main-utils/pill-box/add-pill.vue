<template>
    <div class="create bg-white">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputName" class="form-label">Pill Label</label>
                <input type="text" class="form-control" id="inputName">
            </div>
            <div class="col-md-6">
                <label for="inputDuration" class="form-label">Treatment Duration</label>
                <select id="inputDuration" class="form-select">
                <option selected>1 week</option>
                <option>4 weeks</option>
                <option>2 months</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="inputQty" class="form-label">Quantity</label>
                <input type="text" class="form-control" id="inputQty">
            </div>
            <div class="col-md-6">
                <label for="inputCategory" class="form-label">Category</label>
                <select id="inputCategory" class="form-select">
                <option selected>Anti-biotics</option>
                <option>Anti-malaria</option>
                <option>Contraceptive</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="inputCategory" class="form-label">Pharmacist</label>
                <select id="inputCategory" class="form-select">
                <option selected>V-Gate</option>
                <option>Capitol City</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="inputsciName" class="form-label">Expiry Date</label>
                <input type="date" class="form-control" id="inputsciName">
            </div>
           <div class="col-md-12">
                <label for="inputsciName" class="form-label">Caution</label>
                <textarea class="form-control" id="inputsciName"> 

                </textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>

    </div>
</template>
<script>
export default {
    name: 'AddDrug'
}
</script>
<style scoped>
  .create{
      margin-top: 3.5rem;
      padding: 3rem;
  }

  .create form label{
      font-size: 1rem;
  }
</style>