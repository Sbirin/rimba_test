<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="py-4 container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="d-flex align-items-center">
                    <p class="mb-0">Barang</p>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <label for="example-text-input" class="form-control-label">Nama Barang</label>
                      <input class="form-control" type="text" value="Jesse" />
                    </div>
                    <div class="col-md-6">
                      <label for="example-text-input" class="form-control-label"
                        >Last name</label
                      >
                      
                    </div>
                  </div>
                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">Contact Information</p>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="example-text-input" class="form-control-label"
                        >Address</label
                      >
                      <argon-input
                        type="text"
                        value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="example-text-input" class="form-control-label"
                        >City</label
                      >
                      <argon-input type="text" value="New York" />
                    </div>
                    <div class="col-md-4">
                      <label for="example-text-input" class="form-control-label"
                        >Country</label
                      >
                      <argon-input type="text" value="United States" />
                    </div>
                    <div class="col-md-4">
                      <label for="example-text-input" class="form-control-label"
                        >Postal code</label
                      >
                      <argon-input type="text" value="437300" />
                    </div>
                  </div>
                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">About me</p>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="example-text-input" class="form-control-label"
                        >About me</label
                      >
                      <argon-input
                        type="text"
                        value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <profile-card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";

export default {
  name: "tables",
  components: {
  },
  data() {
    return {
      
    };
  },
  components: ArgonInput ,
};
</script>
