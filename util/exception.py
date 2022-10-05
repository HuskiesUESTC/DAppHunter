class CustomError(RuntimeError):
    def __init__(self, *args, **kwargs):
        super(*args, **kwargs)
