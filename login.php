<!doctype html>
<html lang="en">

<head>
    <?php include 'commonFiles/allCssLinks.php'; ?>
</head>

<body>
    <?php include 'commonFiles/header.php'; ?>
    <main>
        <section class="logInPage">
            <div class="vertical-center">
                <div class="col-lg-6 m-auto position-relative">
                    <form action="">
                        <div class="card form shadow">
                            <div class="card-body">
                                <div class="card-title">
                                    <h5>Welcome back!</h5>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1">
                                    </div>
                                    <a type="submit" class="purchaseAlpine text-center" href="javascript:void(0)"><img src="assets/images/icons/Icon01.png" alt=""> Enter Dashboard</a>
                                    <div class="mb-3">
                                        <p class="mb-0">Don’t have an account? <a class="text-dark" href="create-an-account.php">Sign up</a></p>
                                        <p class="mb-0">Forgot your password? <a class="text-dark" href="reset-password.php">Reset it</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <?php include 'commonFiles/allScriptsLinks.php'; ?>
</body>

</html>