<template>
    <div class="container rounded bg-white" id="profile">
        <div class="row">
            <div class="col-md-5 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
            </div>
            <div class="col-md-7 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-right">Profile Settings</h2>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label class="labels">Name</label>
                            <input type="text" class="form-control" placeholder="first name" value="">
                        </div>
                        <div class="col-md-6">
                            <label class="labels">Surname</label>
                            <input type="text" class="form-control" value="" placeholder="surname">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 mt-3">
                            <label class="labels">Mobile Number</label>
                            <input type="text" class="form-control" placeholder="enter phone number" value="">
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="labels">Identification Number</label>
                            <input type="text" class="form-control" placeholder="NIN" value="">
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="labels">Address</label>
                            <input type="text" class="form-control" placeholder="enter address" value="">
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="labels">Email</label>
                            <input type="text" class="form-control" placeholder="jothamntekim@gmail.com" value="">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <label class="labels">Country</label>
                            <input type="text" class="form-control" placeholder="Nigeria" value="">
                        </div>
                        <div class="col-md-6">
                            <label class="labels">State/Region</label>
                            <input type="text" class="form-control" value="" placeholder="PANS">
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="labels">Bio</label>
                        <textarea type="text" class="form-control" placeholder="" value=""></textarea>
                    </div>
                    <div class="mt-5 text-center">
                        <button class="btn btn-primary profile-button" type="button">Save Profile</button>
                    </div>
                </div>
            </div>
            <!-- <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                    <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                    <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'Profile'
}
</script>
<style scoped>
#profile{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.0rem;
}
.form-control:focus {
    box-shadow: none;
    border-color: var(--color-primary);
}
.profile-button {
    background: var(--color-primary);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: var(--color-primary)
}

.profile-button:focus {
    background: var(--color-primary);
    box-shadow: none
}

.profile-button:active {
    background: var(--color-primary);
    box-shadow: none
}

.back:hover {
    color: var(--color-primary);
    cursor: pointer
}

.labels {
    font-size: 1rem;
}

.add-experience:hover {
    background: var(--color-primary);;
    color: #fff;
    cursor: pointer;
    border: solid 1px var(--color-primary)
}
</style>