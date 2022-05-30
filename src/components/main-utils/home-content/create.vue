<template>
    <div class="create">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputName" class="form-label">Employee Name</label>
                <input type="text" class="form-control" id="inputName">
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4">
            </div>
            
            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                <option selected>Rivers</option>
                <option>Delta</option>
                <option>Bayelsa</option>
                <option>Edo</option>
                <option>Akwa Ibom</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-4">
                <label for="inputRole" class="form-label">Role</label>
                <select id="inputRole" class="form-select">
                <option selected>Manager</option>
                <option>Sales Person</option>
                <option>Pharmacist</option>
                <option>Security</option>
                </select>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
            </form>

    </div>
</template>
<script>
export default {
    name: 'AddPharmacy'
}
</script>
<style scoped>
  .create{
      margin-top: 3.7rem;
  }

  .create form label{
      font-size: 1rem;
      font-weight: 500;
  }
</style>