<template>
    <div class="create bg-white">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputName" class="form-label">Drug Name</label>
                <input type="text" class="form-control" id="inputName">
            </div>
            <div class="col-md-6">
                <label for="inputsciName" class="form-label">Scientific Name</label>
                <input type="text" class="form-control" id="inputsciName">
            </div>
            <div class="col-md-6">
                <label for="inputQty" class="form-label">Quantity</label>
                <input type="text" class="form-control" id="inputQty">
            </div>
            <div class="col-md-6">
                <label for="inputmanufacturer" class="form-label">Manufacturer</label>
                <input type="text" class="form-control" id="inputmanufacturer">
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
                <label for="inputCost" class="form-label">Cost per Unit</label>
                <input type="text" class="form-control" id="inputCost">
            </div>
            <div class="col-md-6">
                <label for="inputName" class="form-label">Manufacture Date</label>
                <input type="date" class="form-control" id="inputName">
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